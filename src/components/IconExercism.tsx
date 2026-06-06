import type { MantineColor } from "@mantine/core";
import type React from "react";
import ImageIcon from "./ImageIcon";
import image from '@/images/exercism.png';

interface Props
{
    size: string,
    color?: MantineColor,
}

export default function IconExercism(props: Props): React.ReactNode
{
    return (
        <ImageIcon size={props.size} url={image} />
    )
}