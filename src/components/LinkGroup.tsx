import { Card, Title } from "@mantine/core";


interface Props extends React.PropsWithChildren
{
    caption: string,
}

export default function LinkGroup(props: Props): React.ReactNode
{
    return (
        <Card withBorder={true} shadow='md' m='xl'>
            <Card.Section>
                <Title m='lg'>
                    {props.caption}
                </Title>
            </Card.Section>
            {props.children}
        </Card>
    )
}