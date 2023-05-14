import Session from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";
import { SiweErrorType, SiweMessage, generateNonce } from "siwe";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
	const session = await Session.fromRequest(req);

	return NextResponse.json(session.toJSON());
};

export const PUT = async (req: NextRequest): Promise<NextResponse> => {
	const session = await Session.fromRequest(req);
	if (!session?.nonce) session.nonce = generateNonce();

	return new NextResponse(session.nonce, { headers: await session.persist() });
};

export const POST = async (req: NextRequest) => {
	const { message, signature } = await req.json();
	const session = await Session.fromRequest(req);

	try {
		const siweMessage = new SiweMessage(message);
		const { data: fields } = await siweMessage.verify({
			signature,
			nonce: session.nonce,
		});

		if (fields.nonce !== session.nonce)
			return new NextResponse("Invalid nonce.", { status: 422 });

		session.address = fields.address;
		session.chainId = fields.chainId;
	} catch (error) {
		switch (error) {
			case SiweErrorType.INVALID_NONCE:
			case SiweErrorType.INVALID_SIGNATURE:
				return new NextResponse(String(error), { status: 422 });

			default:
				return new NextResponse(String(error), { status: 400 });
		}
	}

	return new NextResponse("", { headers: await session.persist() });
};

export const DELETE = async (req: NextRequest) => {
	const session = await Session.fromRequest(req);

	session.clear();
	return new NextResponse("", { headers: await session.persist() });
};
