export default function Avatar({ src, alt, size = "40px" }) {
    return (
        <img
            src={src}
            alt={alt}
            className="rounded-full"
            style={{ width: size, height: size }}
        />
    );
}
