/// <reference types="react" />
import { BlockQuoteProps } from 'react-html-props';
export interface IGEmbedProps extends BlockQuoteProps {
    url: string;
    backgroundUrl?: string;
    igVersion?: string;
    viewPostText?: string;
}
export declare const IGEmbed: ({ url, backgroundUrl, igVersion, viewPostText, ...blockQuoteProps }: IGEmbedProps) => JSX.Element;
