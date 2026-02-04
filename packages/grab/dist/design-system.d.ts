interface DesignSystemPreviewOptions {
    onDispose?: () => void;
}
declare const renderDesignSystemPreview: (container: HTMLElement, options?: DesignSystemPreviewOptions) => (() => void);

export { type DesignSystemPreviewOptions, renderDesignSystemPreview };
