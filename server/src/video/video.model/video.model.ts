import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses'
import {prop} from '@typegoose/typegoose'


export interface VideoModel extends Base{}
export class VideoModel extends TimeStamps{

@prop()
name: string

@prop()
isPublic: boolean

@prop({default:0})
views?: number

@prop()
description: string

@prop({default:0})
likes?: number

@prop({default:0})
dislikes?: number

@prop()
videoPath: string

@prop()
thumbnailPath: string
}

