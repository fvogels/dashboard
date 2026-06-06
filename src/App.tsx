import './App.css'
import '@mantine/core/styles.css';
import { Flex, MantineProvider, Stack } from '@mantine/core';
import LinkIcon from '@/components/LinkIcon';
import { IconBrandAmazon, IconBrandApple, IconBrandDisney, IconBrandHbo, IconBrandNetflix, IconBrandYoutube, IconCalendar, IconCloud, IconListCheck, IconMail, IconPencil } from '@tabler/icons-react';
import { useHotkeys, useToggle } from '@mantine/hooks';
import LinkGroup from '@/components/LinkGroup';

function App() {
    const [ showShortcuts, toggleShowShortcuts ] = useToggle([false, true]);

    useHotkeys([
        [
            "space",
            () => toggleShowShortcuts(),
        ]
    ])

    return (
        <>
            <MantineProvider defaultColorScheme='dark'>
                <Stack>
                    <LinkGroup caption='Google'>
                        <Flex gap='xs'>
                            <LinkIcon url='https://mail.google.com' backgroundColor='blue' shortcut="m" name='Mail' icon={IconMail} showShortcut={showShortcuts} />
                            <LinkIcon url='https://calendar.google.com' backgroundColor='grape' shortcut="c" name='Calendar' icon={IconCalendar} showShortcut={showShortcuts} />
                            <LinkIcon url='https://keep.google.com' backgroundColor='green' shortcut="k" name='Keep' icon={IconPencil} showShortcut={showShortcuts} />
                            <LinkIcon url='https://tasks.google.com' backgroundColor='red' shortcut="t" name='Tasks' icon={IconListCheck} showShortcut={showShortcuts} />
                            <LinkIcon url='https://drive.google.com/' backgroundColor='gray' shortcut="d" name='Drive' icon={IconCloud} showShortcut={showShortcuts} />
                        </Flex>
                    </LinkGroup>
                    <LinkGroup caption='Streaming'>
                        <Flex gap='xs'>
                            <LinkIcon url='https://https://www.youtube.com/' backgroundColor='red' name='YouTube' icon={IconBrandYoutube} />
                            <LinkIcon url='https://primevideo.com' foregroundColor='black' backgroundColor='#FEBD69' name='Amazon Prime' icon={IconBrandAmazon} />
                            <LinkIcon url='https://www.disneyplus.com/home' backgroundColor='#226670' name='Disney+' icon={IconBrandDisney} />
                            <LinkIcon url='https://tv.apple.com/be' backgroundColor='white' foregroundColor='black' name='AppleTV' icon={IconBrandApple} />
                            <LinkIcon url='https://www.netflix.com/browse' backgroundColor='#E50914' name='Netflix' icon={IconBrandNetflix} />
                            <LinkIcon url='https://play.hbomax.com/' backgroundColor='#000' foregroundColor='white' name='HBO Max' icon={IconBrandHbo} />
                        </Flex>
                    </LinkGroup>
                </Stack>
            </MantineProvider>
        </>
    )
}

export default App
