import { TypographDefault, TypographWrapper } from "./styles";
import { ITypographyProps } from "./interface";

const Typography = (props: ITypographyProps) => {
  return (
    <TypographWrapper {...props}>
      <TypographDefault
        fontSize={props.fontSize}
        fontColor={props.fontColor}
        fontWeight={props.fontWeight}
      >
        {props.children}
      </TypographDefault>
    </TypographWrapper>
  );
};

export default Typography;
