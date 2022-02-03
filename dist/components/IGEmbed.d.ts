/// <reference types="react" />
import { BlockQuoteProps } from 'react-html-props';
export interface IGEmbedProps extends BlockQuoteProps {
    url: string;
    backgroundUrl?: string;
    igVersion?: string;
    linkText?: string;
    processDelay?: number;
    scriptImportDisabled?: boolean;
}
export declare const IGEmbed: ({ url, backgroundUrl, igVersion, linkText, processDelay, scriptImportDisabled, ...blockQuoteProps }: IGEmbedProps) => JSX.Element;
