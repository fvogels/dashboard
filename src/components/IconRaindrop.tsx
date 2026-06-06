import type { MantineColor } from "@mantine/core";
import type React from "react";
import ImageIcon from "./ImageIcon";
import image from '@/images/raindrop.png';

interface Props
{
    size: string,
    color?: MantineColor,
}

export default function IconRaindrop(props: Props): React.ReactNode
{
    return (
        <ImageIcon size={props.size} url={image} />
    )
}