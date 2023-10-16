import { deletePost, getById, updatePost } from "@/lib/data";
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    try {
        const id = req.url.split("blogs/")[1];
        const post = getById(id);
        console.log(id); 
        if (!post){
            return NextResponse.json({ message: "ERROR", post }, { status: 404 });
        }
        return NextResponse.json({ message: "OK", post }, { status: 200 });
    } catch(err){
        return NextResponse.json({ message: "ERROR", err }, { status: 404 });
    }
};

export const PUT = async (req: Request) => {
    try {
        const {title, desc} = await req.json();
        const id = req.url.split("blogs/")[1];
        updatePost(id, title, desc);
        return NextResponse.json({ message: "OK" }, { status: 200 });

    } catch(err){
        return NextResponse.json({ message: "ERROR", err }, { status: 404 });
    }
};

export const DELETE = async (req: Request) => {
    try {
        const id = req.url.split("blogs/")[1];
        deletePost(id);
        console.log(id); 
        return NextResponse.json({ message: "OK" }, { status: 200 });
    } catch(err){
        return NextResponse.json({ message: "ERROR", err }, { status: 404 });
    }
};

export const PATCH = async (req: Request) => {
    try {
      const { title, desc } = await req.json();
      const id = req.url.split("blogs/")[1];
      updatePost(id, title, desc);
      return NextResponse.json({ message: "OK" }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ message: "ERROR", err }, { status: 404 });
    }
  };

