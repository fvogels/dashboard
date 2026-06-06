import './App.css'
import '@mantine/core/styles.css';
import { Center, Flex, MantineProvider } from '@mantine/core';
import LinkIcon from '@/components/LinkIcon';
import { IconBrandAmazon, IconBrandApple, IconBrandAws, IconBrandDisney, IconBrandHbo, IconBrandNetflix, IconBrandReddit, IconBrandYoutube, IconBrandZalando, IconCalendar, IconCloud, IconLetterY, IconListCheck, IconMail, IconMovie, IconPencil } from '@tabler/icons-react';
import { useHotkeys, useToggle } from '@mantine/hooks';
import LinkGroup from '@/components/LinkGroup';
import IconDeStandaard from './components/IconDeStandaard';
import IconArsTechnica from './components/IconArsTechnica';
import IconQuantaMagazine from './components/IconQuantaMagazine';
import IconScientificAmerican from './components/IconScientificAmerican';
import IconPhysOrg from './components/IconPhysOrg';
import IconDelhaize from './components/IconDelhaize';
import IconLeetCode from './components/IconLeetcode';
import IconCodewars from './components/IconCodeWars';
import IconExercism from './components/IconExercism';
import IconImdb from './components/IconImdb';
import IconJustWatch from './components/IconJustWatch';
import IconClaude from './components/IconClaude';
import IconGemini from './components/IconGemini';
import IconChatGpt from './components/IconChatGpt';
import IconBitwarden from './components/IconBitwarden';
import IconRaindrop from './components/IconRaindrop';

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
                <Center h='100vh' w='100vw'>
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
                        <LinkGroup caption='Streaming'>
                            <Flex gap='xs'>
                                <LinkIcon url='https://www.youtube.com/' backgroundColor='red' name='YouTube' icon={IconBrandYoutube} />
                                <LinkIcon url='https://primevideo.com' foregroundColor='black' backgroundColor='#FEBD69' name='Amazon Prime' icon={IconBrandAmazon} />
                                <LinkIcon url='https://www.disneyplus.com/home' backgroundColor='#226670' name='Disney+' icon={IconBrandDisney} />
                                <LinkIcon url='https://tv.apple.com/be' backgroundColor='white' foregroundColor='black' name='AppleTV' icon={IconBrandApple} />
                                <LinkIcon url='https://www.netflix.com/browse' backgroundColor='#E50914' name='Netflix' icon={IconBrandNetflix} />
                                <LinkIcon url='https://play.hbomax.com/' backgroundColor='#000' foregroundColor='white' name='HBO Max' icon={IconBrandHbo} />
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
                        <LinkGroup caption='Shopping'>
                            <Flex gap='xs'>
                                <LinkIcon url='https://www.zalando.be/' backgroundColor='#FF4C00' name='Zalando' icon={IconBrandZalando} />
                                <LinkIcon url='https://www.amazon.com.be/' backgroundColor='#FEBD69' foregroundColor='black' name='Amazon BE' icon={IconBrandAmazon} />
                                <LinkIcon url='https://www.amazon.fr/' backgroundColor='#FEBD69' foregroundColor='black' name='Amazon FR' icon={IconBrandAmazon} />
                                <LinkIcon url='https://www.delhaize.be/' backgroundColor='white' foregroundColor='black' name='Delhaize' icon={IconDelhaize} />
                            </Flex>
                        </LinkGroup>
                        <LinkGroup caption='Coding'>
                            <Flex gap='xs'>
                                <LinkIcon url='https://exercism.org/' backgroundColor='#0092A1'  name='Exercism' icon={IconExercism} />
                                <LinkIcon url='https://www.codewars.com/' backgroundColor='#600' foregroundColor='white' name='Codewars' icon={IconCodewars} />
                                <LinkIcon url='https://leetcode.com/' backgroundColor='white' foregroundColor='black' name='LeetCode' icon={IconLeetCode} />
                            </Flex>
                        </LinkGroup>
                        <LinkGroup caption='TV/Movies'>
                            <Flex gap='xs'>
                                <LinkIcon url='https://www.imdb.com/' backgroundColor='black'  name='IMDb' icon={IconImdb} />
                                <LinkIcon url='https://defilmblog.be/' backgroundColor='#A22' foregroundColor='black' name='FilmBlog' icon={IconMovie} />
                                <LinkIcon url='https://www.justwatch.com/be' backgroundColor='#FF0' foregroundColor='black' name='JustWatch' icon={IconJustWatch} />
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
                                <LinkIcon url='https://vault.bitwarden.com/' backgroundColor='#005'  name='Bitwarden' icon={IconBitwarden} />
                                <LinkIcon url='https://app.raindrop.io/my/0' backgroundColor='white' foregroundColor='black' name='Raindrop' icon={IconRaindrop} />
                                <LinkIcon url='https://aws.amazon.com/console/' backgroundColor='#FEBD69' foregroundColor='black' name='Raindrop' icon={IconBrandAws} />
                            </Flex>
                        </LinkGroup>
                    </Flex>
                </Center>
            </MantineProvider>
        </>
    )
}

export default App
