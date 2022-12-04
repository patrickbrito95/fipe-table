import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import { ITypographyProps } from './interface';


export const TypographDefault = styled.span<ITypographyProps>`
    font-size: ${prop("fontSize")};
    color: ${prop("fontColor", prop("black"))};
    font-family: ${prop('fontFamily')};
    font-weight: ${prop("fontWeight")};
    line-height: ${prop("lineHeight")};
    text-decoration: none;
    line-clamp: ${ifProp(
        "wrapLine",
        prop(`
            display: -webkit-box;
            -webkit-line-clamp: ${prop("wrapLine")};
            -webkit-box-orient: vertical;  
            overflow: hidden;
        `)
  )};
`


export const TypographWrapper = styled.div<ITypographyProps>`
    margin-top: ${prop("marginTop")};
    margin-left: ${prop("marginLeft")};
    margin-right: ${prop("marginRight")};
    margin-bottom: ${prop("marginBottom")};
    padding-bottom: ${prop("paddingBottom")};
    padding-right: ${prop("paddingRight")};
    padding-left: ${prop("paddingLeft")};
    padding-top: ${prop("paddingTop")};
    line-height: ${prop("lineHeight")};
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-text: center;
    align-items: center;
`