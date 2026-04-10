export default function CoverPhoto() {
    return (
        <>
            <div className="w-full h-[350px]">
                <img
                    className="w-full h-full object-cover"
                    src="https://picsum.photos/600/300"
                    alt=""
                />
            </div>
        </>
    );
}
