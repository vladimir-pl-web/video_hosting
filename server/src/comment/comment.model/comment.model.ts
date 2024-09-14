import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses'
import {prop, Ref} from '@typegoose/typegoose'
import { UserModel } from 'src/user/user.model/user.model'
import { VideoModel } from 'src/video/video.model/video.model'


export interface CommentModel extends Base{}
export class CommentModel extends TimeStamps{

@prop({ref:()=>UserModel})
user: Ref<UserModel>

@prop({ref:()=>VideoModel})
video: Ref<VideoModel>


@prop()
message: string
}