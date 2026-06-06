import { Flex } from '@mantine/core';
import LinkIcon from '@/components/LinkIcon';
import { IconBrandAmazon, IconBrandApple, IconBrandAws, IconBrandDisney, IconBrandHbo, IconBrandNetflix, IconBrandReddit, IconBrandYoutube, IconBrandZalando, IconCalendar, IconCloud, IconLetterY, IconListCheck, IconMail, IconMovie, IconPencil } from '@tabler/icons-react';
import LinkGroup from '@/components/LinkGroup';
import IconDeStandaard from '@/components/IconDeStandaard';
import IconArsTechnica from '@/components/IconArsTechnica';
import IconQuantaMagazine from '@/components/IconQuantaMagazine';
import IconScientificAmerican from '@/components/IconScientificAmerican';
import IconPhysOrg from '@/components/IconPhysOrg';
import IconDelhaize from '@/components/IconDelhaize';
import IconLeetCode from '@/components/IconLeetcode';
import IconCodewars from '@/components/IconCodeWars';
import IconExercism from '@/components/IconExercism';
import IconImdb from '@/components/IconImdb';
import IconJustWatch from '@/components/IconJustWatch';
import IconClaude from '@/components/IconClaude';
import IconGemini from '@/components/IconGemini';
import IconChatGpt from '@/components/IconChatGpt';
import IconBitwarden from '@/components/IconBitwarden';
import IconRaindrop from '@/components/IconRaindrop';


interface Props
{
    showShortcuts: boolean,
}

export default function WorkDashboard({showShortcuts}: Props): React.ReactNode
{
    return (
        <Flex gap='1em' justify='space-evenly' wrap='wrap'>
            <LinkGroup caption='Google'>
                <Flex gap='xs'>
                    <LinkIcon url='https://mail.google.com' backgroundColor='blue' shortcut="m" name='Mail' icon={IconMail} showShortcut={showShortcuts} />
                    <LinkIcon url='https://calendar.google.com' backgroundColor='grape' shortcut="c" name='Calendar' icon={IconCalendar} showShortcut={showShortcuts} />
                    <LinkIcon url='https://keep.google.com' backgroundColor='green' shortcut="k" name='Keep' icon={IconPencil} showShortcut={showShortcuts} />
                    <LinkIcon url='https://tasks.google.com' backgroundColor='red' shortcut="t" name='Tasks' icon={IconListCheck} showShortcut={showShortcuts} />
                    <LinkIcon url='https://drive.google.com/' backgroundColor='gray' shortcut="d" name='Drive' icon={IconCloud} showShortcut={showShortcuts} />
                </Flex>
            </LinkGroup>
            <LinkGroup caption='Social'>
                <Flex gap='xs'>
                    <LinkIcon url='https://www.reddit.com/' backgroundColor='#FF5700'  name='Reddit' icon={IconBrandReddit} />
                    <LinkIcon url='https://www.standaard.be/' backgroundColor='#D90000' name='De Standaard' icon={IconDeStandaard} />
                    <LinkIcon url='https://news.ycombinator.com/' backgroundColor='#FF5A00' name='Hacker News' icon={IconLetterY} />
                    <LinkIcon url='https://arstechnica.com/' backgroundColor='white' foregroundColor='black' name='Ars Technica' icon={IconArsTechnica} />
                    <LinkIcon url='https://www.quantamagazine.org/' backgroundColor='#FFBB00' foregroundColor='black' name='Quantamagazine' icon={IconQuantaMagazine} />
                    <LinkIcon url='https://www.scientificamerican.com/' backgroundColor='#A4D8EF' foregroundColor='black' name='Scientific American' icon={IconScientificAmerican} />
                    <LinkIcon url='https://phys.org/' backgroundColor='#999' foregroundColor='black' name='phys.org' icon={IconPhysOrg} />
                </Flex>
            </LinkGroup>
            <LinkGroup caption='AI'>
                <Flex gap='xs'>
                    <LinkIcon url='https://chatgpt.com/' backgroundColor='cyan'  name='ChatGPT' icon={IconChatGpt} />
                    <LinkIcon url='https://gemini.google.com/' backgroundColor='white' foregroundColor='black' name='Gemini' icon={IconGemini} />
                    <LinkIcon url='https://claude.ai/' backgroundColor='#FF0' foregroundColor='black' name='Claude' icon={IconClaude} />
                </Flex>
            </LinkGroup>
            <LinkGroup caption='Util'>
                <Flex gap='xs'>
                    <LinkIcon url='https://vault.bitwarden.com/' backgroundColor='#005'  name='Bitwarden' icon={IconBitwarden} shortcut='b' showShortcut={showShortcuts} />
                    <LinkIcon url='https://app.raindrop.io/my/0' backgroundColor='white' foregroundColor='black' name='Raindrop' icon={IconRaindrop} shortcut='r' showShortcut={showShortcuts} />
                </Flex>
            </LinkGroup>
       </Flex>
    )
}