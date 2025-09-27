import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

//createCourse.dto.ts
export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    thumbnailKey: string;

    @IsNumber()
    price: number;

    @IsOptional()
    @IsNumber()
    duration: number;
}