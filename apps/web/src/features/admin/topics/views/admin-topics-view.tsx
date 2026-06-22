"use client";

import { useState, useEffect } from "react";
import type { ApiResponse } from "@english-os/types";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type TopicRow = { id: string; title: string; levelName: string; lessonCount: number; isPublished: boolean; order: number };

export function AdminTopicsView() {
  const [topics, setTopics] = useState<TopicRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/topics")
      .then((r) => r.json())
      .then((json: ApiResponse<TopicRow[]>) => {
        if (json.data) setTopics(json.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const togglePublish = async (id: string, current: boolean) => {
    const res = await fetch(`/api/admin/topics/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isPublished: !current }),
    });
    const json: ApiResponse<TopicRow> = await res.json();
    if (json.error) { toast.error(json.error.message); return; }
    setTopics((prev) => prev.map((t) => t.id === id ? { ...t, isPublished: !current } : t));
    toast.success(`Topic ${!current ? "published" : "unpublished"}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-brand-text">Admin — Topics</h1>
        <Button size="sm"><Plus className="size-4 mr-1" />Thêm topic</Button>
      </div>

      {isLoading ? (
        <p className="text-brand-muted text-sm">Đang tải...</p>
      ) : (
        <div className="glass-card rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 text-left">
                <th className="px-4 py-3 text-brand-muted font-medium">Tiêu đề</th>
                <th className="px-4 py-3 text-brand-muted font-medium">Level</th>
                <th className="px-4 py-3 text-brand-muted font-medium">Bài học</th>
                <th className="px-4 py-3 text-brand-muted font-medium">Trạng thái</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {topics.map((t) => (
                <tr key={t.id} className="border-b border-white/5 last:border-0">
                  <td className="px-4 py-3 text-brand-text">{t.title}</td>
                  <td className="px-4 py-3 text-brand-muted">{t.levelName}</td>
                  <td className="px-4 py-3 text-brand-muted">{t.lessonCount}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs rounded-full px-2.5 py-0.5 font-medium ${t.isPublished ? "bg-green-500/10 text-green-400" : "bg-white/5 text-brand-muted"}`}>
                      {t.isPublished ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => togglePublish(t.id, t.isPublished)}
                      className="text-xs text-brand-primary hover:underline"
                    >
                      {t.isPublished ? "Unpublish" : "Publish"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
