import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";

export async function GET(request:NextRequest) {
    const form = await prisma.formSchema.findMany();
    return NextResponse.json(form)
}

export async function POST(request:NextRequest) {
    const body = await request.json();
    const formData = await prisma.formSchema.create({
        data:{
            form: body.form,
        }
    })

    return NextResponse.json(formData);
}