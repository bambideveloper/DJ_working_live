const Custom = () => ({
    boxShadow: '0 8px 20px rgb(0, 0, 0, 0.06)',
    SubActionButton: {
        backgroundColor: '#f4f4f4',
        borderRadius: '30px',
        color: '#000',
        height: '40px',
        padding: '15px 16px 15px 16px',
        '&>.MuiSvgIcon-root, & svg': {
            width: '16px',
            height: '16px',
            opacity: '0.5',
            fill: "rgba(0,0,0,0.5)",
        },
        '&:hover, &:hover>.MuiSvgIcon-root, &:hover>svg': {
            color: '#fff',
            fill: "#fff"
        }
    }
});

export default Custom;