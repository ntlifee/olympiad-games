const SocialLink = (prop) => {
    const { NameImage, Link, Width } = prop;
    return (
        <a style={{ width: Width, display: "inline-block" }} href={Link}>
            <img src={NameImage} alt="GitHub" />
        </a>
    );
}

export default SocialLink;