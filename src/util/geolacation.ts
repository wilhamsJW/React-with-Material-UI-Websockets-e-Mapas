export function getCurrentPosition(
    options?: PositionOptions
) : Promise<{ lat: number; lng: number }> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) =>
             resolve({
                 lat: position.coords.latitude,
                 lng: position.coords.latitude,
             }),
             (error) => reject(error),
             options
        );
    });
}

/** Função feita para pegar latitude e longitude de onde eu estou, é algo nativo do JS */