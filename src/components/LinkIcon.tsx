import { Flex, Text, UnstyledButton, type MantineColor } from "@mantine/core";
import { useHotkeys, type HotkeyItem } from "@mantine/hooks";
import classes from './LinkIcon.module.css';


interface IconProps
{
    size: string,
    color?: MantineColor,
}

interface Props
{
    url: string,
    icon: React.ComponentType<IconProps>
    foregroundColor?: MantineColor,
    backgroundColor: MantineColor,
    name: string,
    shortcut?: string,
    showShortcut?: boolean,
}

export default function LinkIcon(props: Props): React.ReactNode
{
    const showShortcut: boolean = props.showShortcut || false;
    const hotkeys: HotkeyItem[] = [];

    if ( props.shortcut )
    {
        hotkeys.push([props.shortcut, navigateToUrl])
    }

    useHotkeys(hotkeys)

    return (
        <UnstyledButton variant="default" bg={props.backgroundColor} className={classes.button} onMouseDown={onMouseDown} style={{width: '128px', height: '128px'}}>
            <Flex direction="column" justify='flex-start' align='stretch' gap='sm'>
                <Flex direction="row" justify='center'>
                    <div style={({width: '64px', height: '64px'})} className={classes.iconContainer}>
                        <props.icon size={"64px"} color={props.foregroundColor} />
                    </div>
                </Flex>
                <Text className={classes.caption} c={props.foregroundColor}>
                    {determineCaption()}
                </Text>
            </Flex>
        </UnstyledButton>
    )


    function onMouseDown(event: React.MouseEvent)
    {
        if ( event.button === 0 && !event.ctrlKey )
        {
            navigateToUrl();
        }
        else if ( (event.button === 0 && event.ctrlKey) || event.button === 1 )
        {
            navigateToUrlInNewTab()
        }
    }

    function navigateToUrl()
    {
        window.location.href = props.url
    }

    function navigateToUrlInNewTab()
    {
        window.open(props.url, '_blank')
    }

    function determineCaption(): string
    {
        return showShortcut ? props.shortcut || props.name : props.name
    }
}
