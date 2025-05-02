type AboutParagraphProps = {
  title?:string;
  content:string
}
function AboutParagraph({title,content}:AboutParagraphProps) {
  return (
    <div>
      <h1 className="text-lg font-bold px-6 py-4  text-[#33312e]">{title}</h1>
            <p className="leading-7 text-justify px-4 ">{content}
</p>
    </div>
  )
}

export default AboutParagraph
