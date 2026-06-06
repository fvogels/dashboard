import type { MantineColor } from "@mantine/core";
import type React from "react";
import ImageIcon from "./ImageIcon";
import image from '@/images/scientific-american.png';

interface Props
{
    size: string,
    color?: MantineColor,
}

export default function IconScientificAmerican(props: Props): React.ReactNode
{
    return (
        <ImageIcon size={props.size} url={image} />
    )
}