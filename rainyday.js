<meta charset="utf-8">
<title>rainyday.js demo #1</title>
<style media="screen">
    body {
        overflow: hidden;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    img {
        width: 100%;
        height: 100%;
    }

</style>
<script src="./js/rainyday.min.js"></script>

<script>
    function run() {
        var image = document.getElementById('background');
        image.onload = function () {
            var engine = new RainyDay({
                image: this
            });
            engine.rain([
                [1, 2, 8000]
            ]);
            engine.rain([
                [3, 3, 0.88],
                [5, 5, 0.9],
                [6, 2, 1]
            ], 100);
        };
        image.crossOrigin = 'anonymous';
        image.src = 'http://i.imgur.com/N7ETzFO.jpg';
    }

</script>