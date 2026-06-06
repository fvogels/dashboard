import classes from './ImageIcon.module.css';

interface Props
{
    url?: string,
    size: string,
}

export default function ImageIcon(props: Props): React.ReactNode
{
    return (
        <img className={classes.image} src={props.url} style={({maxWidth: props.size, maxHeight: props.size})} />
    )
}
