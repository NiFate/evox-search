import axios from 'axios';
import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    
    const { searchParams } = new URL(req.url);
    let url = `https://raw.githubusercontent.com/Evolution-X/OTA/udc/builds/${searchParams.get("code")}.json`
    
    const device = await axios.get(url).catch(err => { return notFound(); })
    return NextResponse.json({ meta: device.data.response[0] });
}