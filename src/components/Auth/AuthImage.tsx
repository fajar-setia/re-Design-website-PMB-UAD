import ContentLoginWebp from "../../assets/content/contentLogin.webp";

export default function AuthImage() {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          relative
          w-full
          max-w-xl
          h-[600px]
          rounded-2xl
          overflow-hidden
          shadow-2xl
        "
      >
        <img
          src={ContentLoginWebp}
          alt="Campus"
          className="
            absolute inset-0
            w-full h-full
            object-cover
            lazyload
          "
        />
      </div>
    </div>
  );
}