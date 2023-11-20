
import { NextRequest, NextResponse } from "next/server"
import prisma from "../../../../prisma/client"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {

    const user = await prisma.formSchema.findUnique({ where: { id: parseInt(params.id) } })
    if (!user)
        return NextResponse.json({ error: 'User not Found' }, { status: 404 })
    await prisma.formSchema.delete({ where: { id: user.id } })
    return NextResponse.json({ response: "User Deleted Sucessfully" })
}