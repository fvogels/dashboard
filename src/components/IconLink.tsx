import { Flex, Typography, UnstyledButton, type MantineColor } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import classes from './IconLink.module.css';


interface IconProps
{
    size: string
}

interface Props
{
    url: string,
    icon: React.ComponentType<IconProps>
    backgroundColor: MantineColor,
    name: string,
    shortcut: string,
    showShortcut: boolean,
}

export default function IconLink(props: Props): React.ReactNode
{
    useHotkeys([
        [
            props.shortcut,
            navigateToUrl,
        ]
    ])

    return (
        <UnstyledButton variant="default" bg={props.backgroundColor} className={classes.button} onClick={navigateToUrl} style={{width: '128px', height: '128px'}}>
            <Flex direction="column" align='center'gap='sm'>
                <props.icon size="64" />
                <Typography className={classes.caption}>
                    {determineCaption()}
                </Typography>
            </Flex>
        </UnstyledButton>
    )


    function navigateToUrl()
    {
        window.location.href = props.url
    }

    function determineCaption(): string
    {
        return props.showShortcut ? props.shortcut : props.name
    }
}
