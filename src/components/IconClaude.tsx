import type { MantineColor } from "@mantine/core";
import type React from "react";
import ImageIcon from "./ImageIcon";
import image from '@/images/claude.png';

interface Props
{
    size: string,
    color?: MantineColor,
}

export default function IconClaude(props: Props): React.ReactNode
{
    return (
        <ImageIcon size={props.size} url={image} />
    )
}