import { Flex, Text } from "@mantine/core";
import classes from './LinkGroup.module.css';


interface Props extends React.PropsWithChildren
{
    caption: string,
}

export default function LinkGroup(props: Props): React.ReactNode
{
    return (
        <div className={classes.container}>
            <Flex direction='column'>
                <Text className={classes.caption}>
                    {props.caption}
                </Text>
                {props.children}
            </Flex>
        </div>
    )
}