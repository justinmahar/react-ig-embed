/// <reference types="react" />
import { BlockQuoteProps } from 'react-html-props';
export interface IGEmbedProps extends BlockQuoteProps {
    url: string;
    backgroundUrl?: string;
    igVersion?: string;
    linkText?: string;
}
export declare const IGEmbed: ({ url, backgroundUrl, igVersion, linkText, ...blockQuoteProps }: IGEmbedProps) => JSX.Element;
