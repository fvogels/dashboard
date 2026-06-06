import './App.css'
import '@mantine/core/styles.css';
import { Center, MantineProvider } from '@mantine/core';
import { useHotkeys, useToggle } from '@mantine/hooks';
import WorkDashboard from './dashboards/work';
import HomeDashboard from './dashboards/home';

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
                    <HomeDashboard showShortcuts={showShortcuts} />
                </Center>
            </MantineProvider>
        </>
    )


    function dashboard(): React.ReactNode
    {
        switch ( DASHBOARD )
        {
            case 'home':
                return <HomeDashboard showShortcuts={showShortcuts} />

            case 'work':
                return <WorkDashboard showShortcuts={showShortcuts} />

            default:
                return <HomeDashboard showShortcuts={showShortcuts} />
        }
    }
}

export default App
