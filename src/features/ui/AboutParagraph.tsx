type AboutParagraphProps = {
  title?: string;
  content: string;
};

function AboutParagraph({ title, content }: AboutParagraphProps) {
  return (
    <div className="space-y-2">
      {title && (
        <h2 className="text-lg md:text-xl font-semibold tracking-tight text-[#33312e] px-2 md:px-0">
          {title}
        </h2>
      )}

      <p className="text-[15px] md:text-base leading-7 md:leading-8 text-[#4a4846] tracking-[0.003em] px-2 md:px-0 text-justify">
        {content}
      </p>
    </div>
  );
}

export default AboutParagraph;
