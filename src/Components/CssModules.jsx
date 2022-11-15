import classes from "./Style/CssModules.module.scss";

export const CssModules = () => {
    return(
        <div className={classes.container}>
            <p className={classes.title}>CSS Modulesです</p>
            <button className={classes.button}>ボタン</button>
        </div>
    );
};


export const ColoredMessage = (props) => {
    const contentStyle = {
        color: props.color,
        fontSize:"20px"
    };
    /*console.log(props)*/
    return <p style={contentStyle}>{props.children}</p>;
};

/*
export const ReactDemo = (props) => {
    const contentStyle = {
        color: props.color,
        fontSize:"20px"
    };

    return <p style={contentStyle}>{props.message}</p>
};
*/
