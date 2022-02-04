/// <reference types="react" />
import { DivProps } from 'react-html-props';
export interface IGEmbedProps extends DivProps {
    url: string;
    backgroundUrl?: string;
    igVersion?: string;
    linkText?: string;
    processDelay?: number;
    scriptLoadDisabled?: boolean;
    linkTextDisabled?: boolean;
    backgroundBlurDisabled?: boolean;
    softFilterDisabled?: boolean;
    retryDisabled?: boolean;
}
export declare const IGEmbed: ({ url, backgroundUrl, igVersion, linkText, processDelay, scriptLoadDisabled, linkTextDisabled, backgroundBlurDisabled, softFilterDisabled, retryDisabled, ...divProps }: IGEmbedProps) => JSX.Element;
