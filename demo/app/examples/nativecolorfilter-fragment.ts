import { Img } from '@nativescript-community/ui-image';

export function onLoaded(args) {
    const imageView = args.object as Img;
    if (global.isAndroid) {
        const matrix: android.graphics.ColorMatrix = new android.graphics.ColorMatrix();
        matrix.setSaturation(0);
        const filter: android.graphics.ColorMatrixColorFilter = new android.graphics.ColorMatrixColorFilter(
            matrix
        );
        imageView.android.setColorFilter(filter);
    }
}
