import IconBitwarden from '@/components/IconBitwarden';
import IconGemini from '@/components/IconGemini';
import LinkGroup from '@/components/LinkGroup';
import LinkIcon from '@/components/LinkIcon';
import { Flex } from '@mantine/core';
import { IconBrandFigma, IconBrandGoogleDrive, IconBrandGoogleMaps, IconCalendar, IconChartBarPopular, IconCloud, IconCloudCode, IconCloudComputing, IconCloudDownload, IconDeviceMobileSearch, IconEye, IconEyePause, IconListCheck, IconMail, IconPencil, IconRun } from '@tabler/icons-react';


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
                    <LinkIcon url='https://drive.google.com/' backgroundColor='gray' shortcut="d" name='Drive' icon={IconBrandGoogleDrive} showShortcut={showShortcuts} />
                    <LinkIcon url='https://maps.google.com/' backgroundColor='cyan' name='Maps' icon={IconBrandGoogleMaps} />
                    <LinkIcon url='https://console.cloud.google.com/' backgroundColor='#AAA' name='Cloud' icon={IconCloud} foregroundColor='black' shortcut='w' showShortcut={showShortcuts} />
                </Flex>
            </LinkGroup>
            <LinkGroup caption='Guardsquare'>
                <Flex gap='xs'>
                    <LinkIcon url='https://phabricator.guardsquare.com/differential/' backgroundColor='#005' name='Fabricateur' shortcut="f" showShortcut={showShortcuts} icon={IconEye} />
                    <LinkIcon url='https://phabricator.guardsquare.com/project/profile/1697/' backgroundColor='black' name='Current sprint' icon={IconRun} shortcut='s' showShortcut={showShortcuts} />
                    <LinkIcon url='https://redash.guardsquare.com/queries/new' backgroundColor='orange' name='Redash' icon={IconChartBarPopular} shortcut='r' showShortcut={showShortcuts} />
                    <LinkIcon url='https://platform.local.guardsquare.com/' backgroundColor='#005' name='Local Platform' icon={IconCloudDownload} />
                    <LinkIcon url='https://platform.development.guardsquare.com/' backgroundColor='#55F' name='Dev Platform' icon={IconCloudCode} />
                    <LinkIcon url='https://www.figma.com/' backgroundColor='#AA0' foregroundColor='black' name='Figma' icon={IconBrandFigma} />
                    <LinkIcon url='https://guardsquare.lightning.force.com/' backgroundColor='white' foregroundColor='black' name='Salesforce' icon={IconCloudComputing} />
                </Flex>
            </LinkGroup>
            <LinkGroup caption='Util'>
                <Flex gap='xs'>
                    <LinkIcon url='https://gemini.google.com/' backgroundColor='white' foregroundColor='black' name='Gemini' icon={IconGemini} shortcut='g' showShortcut={showShortcuts} />
                    <LinkIcon url='https://vault.bitwarden.com/' backgroundColor='#005'  name='Bitwarden' icon={IconBitwarden} shortcut='b' showShortcut={showShortcuts} />
                    <LinkIcon url='https://trace.playwright.dev/' backgroundColor='rgb(10, 182, 151)' foregroundColor='black'  name='Playwright Trace Viewer' icon={IconEyePause} shortcut='p' showShortcut={showShortcuts} />
                    <LinkIcon url='https://inspector.appiumpro.com/' backgroundColor='#805' name='Appium Inspector' icon={IconDeviceMobileSearch} shortcut='a' showShortcut={showShortcuts} />
                </Flex>
            </LinkGroup>
       </Flex>
    )
}