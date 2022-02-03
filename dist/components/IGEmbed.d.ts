/// <reference types="react" />
import { BlockQuoteProps } from 'react-html-props';
export interface IGEmbedProps extends BlockQuoteProps {
    url: string;
    backgroundUrl?: string;
    igVersion?: string;
    linkText?: string;
    processDelay?: number;
    scriptLoadDisabled?: boolean;
    linkTextDisabled?: boolean;
    backgroundBlurDisabled?: boolean;
    softFilterDisabled?: boolean;
}
export declare const IGEmbed: ({ url, backgroundUrl, igVersion, linkText, processDelay, scriptLoadDisabled, linkTextDisabled, backgroundBlurDisabled, softFilterDisabled, ...blockQuoteProps }: IGEmbedProps) => JSX.Element;
