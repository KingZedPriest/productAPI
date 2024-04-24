import { FilterQuery, UpdateQuery } from "mongoose";
import SessionModel, { SessionDocument } from "../models/sessions.model";


//Create Session
export async function createSession(userId: string, userAgent: string) {

    const session = await SessionModel.create({user: userId, userAgent});

    return session.toJSON();

}


//Find Session
export async function findSessions(query: FilterQuery<SessionDocument>) {
    return SessionModel.find(query).lean()
}

//Update Session
export async function updateSession(query: FilterQuery<SessionDocument>, update: UpdateQuery<SessionDocument>){
    return SessionModel.updateOne(query, update);
}

