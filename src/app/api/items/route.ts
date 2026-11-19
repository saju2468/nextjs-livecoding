import { NextResponse } from "next/server";
import { INITIAL_ITEMS, Item } from "@/lib/mock-data";

const items: Item[] = [...INITIAL_ITEMS];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase();
  const category = searchParams.get("category");
  const status = searchParams.get("status");

  let filtered = [...items];

  if (query) {
    filtered = filtered.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
  }

  if (category && category !== "All") {
    filtered = filtered.filter((item) => item.category === category);
  }

  if (status && status !== "All") {
    filtered = filtered.filter((item) => item.status === status);
  }

  return NextResponse.json({
    success: true,
    data: filtered,
    total: filtered.length,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.title) {
      return NextResponse.json(
        { success: false, error: "Title is required" },
        { status: 400 }
      );
    }

    const newItem: Item = {
      id: Date.now().toString(),
      title: body.title,
      description: body.description || "",
      category: body.category || "Engineering",
      status: body.status || "todo",
      priority: body.priority || "medium",
      votes: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };

    items.unshift(newItem);

    return NextResponse.json(
      { success: true, data: newItem },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON payload" },
      { status: 400 }
    );
  }
}
