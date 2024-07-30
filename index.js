function initMap() {
    // The location you want to center the map on
    const location = { lat: -34.397, lng: 150.644 };
    // The map, centered at the specified location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: location,
    });
    // The marker, positioned at the location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

#projects {
    padding: 3rem 10%;
    background-color: #1f1f1f;
}

.title-section {
    font-size: 2.5rem;
    color: #66A5AD;
    text-align: center;
    margin-bottom: 2rem;
}

/* #projects div {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
} */

#projects img {
    max-width: 200px;
    border-radius: 10px;
    transition: transform 0.3s;
}

#projects img:hover {
    transform: scale(1.05);
}

/* #projects h4 {
    font-size: 1.5rem;
    color: #C4DFE6;
}

#projects p {
    max-width: 600px;
} */