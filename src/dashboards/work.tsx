import IconBitwarden from '@/components/IconBitwarden';
import IconChatGpt from '@/components/IconChatGpt';
import IconClaude from '@/components/IconClaude';
import IconGemini from '@/components/IconGemini';
import LinkGroup from '@/components/LinkGroup';
import LinkIcon from '@/components/LinkIcon';
import { Flex } from '@mantine/core';
import { IconCalendar, IconCloud, IconCloudCode, IconCloudDownload, IconEye, IconListCheck, IconMail, IconMap2, IconPencil, IconRun } from '@tabler/icons-react';


interface Props
{
    showShortcuts: boolean,
}

export default function WorkDashboard({showShortcuts}: Props): React.ReactNode
{
    return (
        <Flex gap='1em' justify='flex-start' wrap='wrap' direction="column" h='90vh'>
            <LinkGroup caption='Google'>
                <Flex gap='xs'>
                    <LinkIcon url='https://mail.google.com' backgroundColor='blue' shortcut="m" name='Mail' icon={IconMail} showShortcut={showShortcuts} />
                    <LinkIcon url='https://calendar.google.com' backgroundColor='grape' shortcut="c" name='Calendar' icon={IconCalendar} showShortcut={showShortcuts} />
                    <LinkIcon url='https://keep.google.com' backgroundColor='green' shortcut="k" name='Keep' icon={IconPencil} showShortcut={showShortcuts} />
                    <LinkIcon url='https://tasks.google.com' backgroundColor='red' shortcut="t" name='Tasks' icon={IconListCheck} showShortcut={showShortcuts} />
                    <LinkIcon url='https://drive.google.com/' backgroundColor='gray' shortcut="d" name='Drive' icon={IconCloud} showShortcut={showShortcuts} />
                    <LinkIcon url='https://maps.google.com/' backgroundColor='cyan' name='Maps' icon={IconMap2} />
                </Flex>
            </LinkGroup>
            <LinkGroup caption='Guardsquare'>
                <Flex gap='xs'>
                    <LinkIcon url='https://phabricator.guardsquare.com/' backgroundColor='#005' name='Phabricator' icon={IconEye} />
                    <LinkIcon url='https://go.tailf31e4.ts.net/sigma' backgroundColor='red' name='Current sprint' icon={IconRun} shortcut='s' showShortcut={showShortcuts} />
                    <LinkIcon url='https://platform.local.guardsquare.com/' backgroundColor='#005' name='Local Platform' icon={IconCloudDownload} />
                    <LinkIcon url='https://platform.development.guardsquare.com/' backgroundColor='#55F' name='Dev Platform' icon={IconCloudCode} />
                </Flex>
            </LinkGroup>
            <LinkGroup caption='Util'>
                <Flex gap='xs'>
                    <LinkIcon url='https://gemini.google.com/' backgroundColor='white' foregroundColor='black' name='Gemini' icon={IconGemini} shortcut='g' showShortcut={showShortcuts} />
                    <LinkIcon url='https://vault.bitwarden.com/' backgroundColor='#005'  name='Bitwarden' icon={IconBitwarden} shortcut='b' showShortcut={showShortcuts} />
                </Flex>
            </LinkGroup>
       </Flex>
    )
}