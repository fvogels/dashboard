import './App.css'
import '@mantine/core/styles.css';
import { Flex, MantineProvider } from '@mantine/core';
import IconLink from '@/components/IconLink';
import { IconCalendar, IconCloud, IconListCheck, IconMail, IconPencil } from '@tabler/icons-react';
import { useHotkeys, useToggle } from '@mantine/hooks';

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
                <Flex gap='xs'>
                    <IconLink url='https://mail.google.com' backgroundColor='blue' shortcut="m" name='GMail' icon={IconMail} showShortcut={showShortcuts} />
                    <IconLink url='https://calendar.google.com' backgroundColor='grape' shortcut="c" name='Calendar' icon={IconCalendar} showShortcut={showShortcuts} />
                    <IconLink url='https://keep.google.com' backgroundColor='green' shortcut="k" name='Keep' icon={IconPencil} showShortcut={showShortcuts} />
                    <IconLink url='https://tasks.google.com' backgroundColor='red' shortcut="t" name='Tasks' icon={IconListCheck} showShortcut={showShortcuts} />
                    <IconLink url='https://drive.google.com/' backgroundColor='gray' shortcut="d" name='Drive' icon={IconCloud} showShortcut={showShortcuts} />
                </Flex>
            </MantineProvider>
        </>
    )
}

export default App
