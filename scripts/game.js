const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const emptyTile = new Image();
const blockTile = new Image();
const background = new Image();

function RandomInt(maxValue) {
    return Math.floor(Math.random() * Math.floor(maxValue));
}

let TileType = {
    empty : 0,
    blockI : 1,
    blockJ : 2,
    blockL : 3,
    blockO : 4,
    blockS : 5,
    blockT : 6,
    blockZ : 7,
}

let field = [];

let menuFieldCurrent = [];
let menuFieldNext = [];

let tetramino;

let currentTetraminoType, nextTetraminoType;

let currentTetramino, nextTetramino;

let gameScore = 0;

let gameLoop = {
    GameOver: false, 
    loopTimeout: null,
    stopGame: function(){
        this.GameOver = true;
        if (this.loopTimeout)
            clearTimeout(this.loopTimeout);
    },
};

function placeTetramino(_x, _y, _tetramino)
{
    let rotation = _tetramino.rotation;
    switch (_tetramino.figureType) {
        case TileType.empty:
            alert("Error, empty block!")
            break;
        case TileType.blockI:
            if (rotation % 2 == 0)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x + 1,
                    y : _y,
                }
                _tetramino.figure[2] = {
                    x : _x + 2,
                    y : _y,
                }
                _tetramino.figure[3] = {
                    x : _x - 1,
                    y : _y,
                }
            }
            else if (rotation % 2 == 1)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x,
                    y : _y + 1,
                }
                _tetramino.figure[2] = {
                    x : _x,
                    y : _y + 2,
                }
                _tetramino.figure[3] = {
                    x : _x,
                    y : _y - 1,
                }
            }
            break;
        case TileType.blockJ:
            if (rotation % 4 == 0)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x,
                    y : _y + 1,
                }
                _tetramino.figure[2] = {
                    x : _x,
                    y : _y - 1,
                }
                _tetramino.figure[3] = {
                    x : _x + 1,
                    y : _y - 1,
                }
            }
            else if (rotation % 4 == 1)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x - 1,
                    y : _y,
                }
                _tetramino.figure[2] = {
                    x : _x + 1,
                    y : _y,
                }
                _tetramino.figure[3] = {
                    x : _x + 1,
                    y : _y + 1,
                }
            }
            else if (rotation % 4 == 2)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x,
                    y : _y - 1,
                }
                _tetramino.figure[2] = {
                    x : _x,
                    y : _y + 1,
                }
                _tetramino.figure[3] = {
                    x : _x - 1,
                    y : _y + 1,
                }
            }
            else if (rotation % 4 == 3)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x + 1,
                    y : _y,
                }
                _tetramino.figure[2] = {
                    x : _x - 1,
                    y : _y,
                }
                _tetramino.figure[3] = {
                    x : _x - 1,
                    y : _y - 1,
                }
            }
            break;
        case TileType.blockL:
            if (rotation % 4 == 0)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x,
                    y : _y - 1,
                }
                _tetramino.figure[2] = {
                    x : _x,
                    y : _y + 1,
                }
                _tetramino.figure[3] = {
                    x : _x + 1,
                    y : _y + 1,
                }
            }
            else if (rotation % 4 == 1)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x + 1,
                    y : _y,
                }
                _tetramino.figure[2] = {
                    x : _x - 1,
                    y : _y,
                }
                _tetramino.figure[3] = {
                    x : _x - 1,
                    y : _y + 1,
                }
            }
            else if (rotation % 4 == 2)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x,
                    y : _y + 1,
                }
                _tetramino.figure[2] = {
                    x : _x,
                    y : _y - 1,
                }
                _tetramino.figure[3] = {
                    x : _x - 1,
                    y : _y - 1,
                }
            }
            else if (rotation % 4 == 3)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x - 1,
                    y : _y,
                }
                _tetramino.figure[2] = {
                    x : _x + 1,
                    y : _y,
                }
                _tetramino.figure[3] = {
                    x : _x + 1,
                    y : _y - 1,
                }
            }
            break;
        case TileType.blockO:
            _tetramino.figure[0] = {
                x : _x,
                y : _y,
            }
            _tetramino.figure[1] = {
                x : _x + 1,
                y : _y,
            }
            _tetramino.figure[2] = {
                x : _x,
                y : _y + 1,
            }
            _tetramino.figure[3] = {
                x : _x + 1,
                y : _y + 1,
            }
            break;
        case TileType.blockS:
            if (rotation % 2 == 0)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x - 1,
                    y : _y,
                }
                _tetramino.figure[2] = {
                    x : _x,
                    y : _y - 1,
                }
                _tetramino.figure[3] = {
                    x : _x + 1,
                    y : _y - 1,
                }
            }
            else if (rotation % 2 == 1)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x,
                    y : _y - 1,
                }
                _tetramino.figure[2] = {
                    x : _x + 1,
                    y : _y,
                }
                _tetramino.figure[3] = {
                    x : _x + 1,
                    y : _y + 1,
                }
            }
            break;
        case TileType.blockT:
            if (rotation % 4 == 0)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x - 1,
                    y : _y,
                }
                _tetramino.figure[2] = {
                    x : _x + 1,
                    y : _y,
                }
                _tetramino.figure[3] = {
                    x : _x,
                    y : _y - 1,
                }
            }
            else if (rotation % 4 == 1)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x,
                    y : _y - 1,
                }
                _tetramino.figure[2] = {
                    x : _x,
                    y : _y + 1,
                }
                _tetramino.figure[3] = {
                    x : _x + 1,
                    y : _y,
                }
            }
            else if (rotation % 4 == 2)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x + 1,
                    y : _y,
                }
                _tetramino.figure[2] = {
                    x : _x - 1,
                    y : _y,
                }
                _tetramino.figure[3] = {
                    x : _x,
                    y : _y + 1,
                }
            }
            else if (rotation % 4 == 3)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x,
                    y : _y + 1,
                }
                _tetramino.figure[2] = {
                    x : _x,
                    y : _y - 1,
                }
                _tetramino.figure[3] = {
                    x : _x - 1,
                    y : _y,
                }
            }
            break;
        default: // blockZ
            if (rotation % 2 == 0)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x - 1,
                    y : _y,
                }
                _tetramino.figure[2] = {
                    x : _x,
                    y : _y + 1,
                }
                _tetramino.figure[3] = {
                    x : _x + 1,
                    y : _y + 1,
                }
            }
            else if (rotation % 2 == 1)
            {
                _tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                _tetramino.figure[1] = {
                    x : _x,
                    y : _y + 1,
                }
                _tetramino.figure[2] = {
                    x : _x + 1,
                    y : _y,
                }
                _tetramino.figure[3] = {
                    x : _x + 1,
                    y : _y - 1,
                }
            }
            break;
    }
}

function spawnTetramino()
{
    //Место появления новых тетрамин
    let x = 4
    let y = -1

    //Если текущая тетрамино не инициализирована, значит, что игра либо только что запустилась либо в игру переигрывают
    if (currentTetraminoType == undefined)
    {
        currentTetraminoType = RandomInt(7) + 1;
        nextTetraminoType = RandomInt(7) + 1;
    }
    else
    {
        currentTetraminoType = nextTetraminoType;
        nextTetraminoType = RandomInt(7) + 1;
    }

    //showMenuTetramino();

    //при появлении фигура повернута случайным образом
    let _rotation = RandomInt(4)

    tetramino  = {
        figure : [],
        figureType : currentTetraminoType,
        rotation : _rotation,
    }

    placeTetramino(x, y, tetramino)
}

function initializeField()
{
    for (let i = 0; i < 10; i++)
    {
        field[i] = [];
        for (let j = 0; j < 20; j++)
        {
            field[i][j] = {
                x : i * 40,
                y : j * 40,
                type : TileType.empty,
                isFallingBlock : false,
            }
        }
    }
}

function updateField()
{
    for (let i = 0; i < 10; i++)
    {
        for (let j = 0; j < 20; j++)
        {
            if (field[i][j].isFallingBlock == true)
            {
                field[i][j] = {
                    x : i * 40,
                    y : j * 40,
                    type : TileType.empty,
                    isFallingBlock: false,
                }
            }
        }
    }
}

function showTetramino()
{
    for (let i = 0; i < 4; i++)
    {
        if (tetramino.figure[i].x >= 0 && tetramino.figure[i].y >= 0)
        {
            field[tetramino.figure[i].x][tetramino.figure[i].y].type = tetramino.figureType;
            field[tetramino.figure[i].x][tetramino.figure[i].y].isFallingBlock = true;
        }
    }
}

function gameComputings()
{
    //gravity alpha
    for (let i = 0; i < 4; i++)
    {
        if (tetramino.figure[i].y < 19) tetramino.figure[i].y++;
    }
}

function isCollision(_direction)
{
    if (_direction == -1) // left
    {
        for (let i = 0; i < 4; i++)
        {
            if (tetramino.figure[i].x <= 0 || (tetramino.figure[i].y >= 0 && (field[tetramino.figure[i].x - 1][tetramino.figure[i].y].type != TileType.empty && field[tetramino.figure[i].x - 1][tetramino.figure[i].y].isFallingBlock == false)))
            {
                return false;
            }
        }
        return true;
    }
    else if (_direction == 1) // right
    {
        for (let i = 0; i < 4; i++)
        {
            if ( tetramino.figure[i].x >= 9 || (tetramino.figure[i].y >= 0 && (field[tetramino.figure[i].x + 1][tetramino.figure[i].y].type != TileType.empty && field[tetramino.figure[i].x + 1][tetramino.figure[i].y].isFallingBlock == false)))
            {
                return false;
            }
        }
        return true;
    }
    else // down
    {
        for (let i = 0; i < 4; i++)
        {
            if (tetramino.figure[i].y >= 0 && (tetramino.figure[i].y >= 19 || (field[tetramino.figure[i].x][tetramino.figure[i].y + 1].type != TileType.empty && field[tetramino.figure[i].x][tetramino.figure[i].y + 1].isFallingBlock == false)))
            {
                return false;
            }
        }
        return true;
    }
}

context.font = "48px sans-serif";

function showMenu()
{
    context.fillStyle = "white";
    context.fillText("Score: " + gameScore, 440, 50, 300);
    showMenuTetramino();
}

function openFullScreen(){
  canvas.requestFullscreen();
}

function showField(_i, _j, _field, _addStroke)
{
    switch (_field[_i][_j].type) {
        case TileType.empty:
            //context.strokeRect(field[i][j].x, field[i][j].y, 40, 40);
            break;
        case TileType.blockI:
            context.fillStyle = "#2CB8EB"; //"cyan";
            context.fillRect(_field[_i][_j].x, _field[_i][_j].y, 40, 40);
            break;
        case TileType.blockJ:
            context.fillStyle = "#6531D6"; //"blue";
            context.fillRect(_field[_i][_j].x, _field[_i][_j].y, 40, 40);
            break;
        case TileType.blockL:
            context.fillStyle = "#F5662A" //"orange";
            context.fillRect(_field[_i][_j].x, _field[_i][_j].y, 40, 40);
            break;
        case TileType.blockO:
            context.fillStyle = "#FFCC00"; //"yellow";
            context.fillRect(_field[_i][_j].x, _field[_i][_j].y, 40, 40);
            break;
        case TileType.blockS:
            context.fillStyle = "#3DD44E"; //"green";
            context.fillRect(_field[_i][_j].x, _field[_i][_j].y, 40, 40);
            break;
        case TileType.blockT:
            context.fillStyle = "#9B18D6"; //"rgb(204,0,255)"; //purple
            context.fillRect(_field[_i][_j].x, _field[_i][_j].y, 40, 40);
            break;
        default:
            context.fillStyle = "#F5424F"; //red //F53532 F5433C //#F54F4C //more pink #FF0D71 //#F5424F
            context.fillRect(_field[_i][_j].x, _field[_i][_j].y, 40, 40);
            break;
    }

    if (_addStroke == true)
    {
        context.strokeRect(_field[_i][_j].x, _field[_i][_j].y, 40, 40);
    }
}

function showMenuTetramino()
{
    context.fillText("Current:", 420, 180, 300);
    context.fillText("Next:", 420, 420, 300);

    //Инициализируем поля, в которых будут появляться текущее и следующее тетрамино
    for (let i = 0; i < 4; i++)
    {
        menuFieldCurrent[i] = [];
        menuFieldNext[i] = [];

        for (let j = 0; j < 4; j++)
        {
            menuFieldCurrent[i][j] = {
                x: (440 + (i * 40)),
                y: (200 + (j * 40)),
                type: TileType.empty,
                isFallingBlock : false,
            }

            menuFieldNext[i][j] = {
                x: (440 + (i * 40)),
                y: (440 + (j * 40)),
                type: TileType.empty,
                isFallingBlock : false,
            }
        }
    }

    //Инициализируем текущее и следующее тетрамино для меню
    currentTetramino  = {
        figure : [],
        figureType : currentTetraminoType,
        rotation : 0,
    }
    nextTetramino  = {
        figure : [],
        figureType : nextTetraminoType,
        rotation : 0,
    }

    //Определяем положение каждого блока этих тетрамино в пространстве относительно координат (1,1)
    placeTetramino(1, 1, currentTetramino);
    placeTetramino(1, 1, nextTetramino);

    //Вносим блоки этих тетрамино в поля
    for (let i = 0; i < 4; i++)
    {
        menuFieldCurrent[currentTetramino.figure[i].x][currentTetramino.figure[i].y].type = currentTetramino.figureType;
        menuFieldNext[nextTetramino.figure[i].x][nextTetramino.figure[i].y].type = nextTetramino.figureType;
    }

    //Рисуем эти поля с текущим и следующим тетрамино
    for (let i = 0; i < 4; i++)
    {
        for (let j = 0; j < 4; j++)
        {
            showField(i, j, menuFieldCurrent, false);
            showField(i, j, menuFieldNext, false);
        }
    }
}

//Рисует кадр
function drawFrame()
{
    //Очищаем поле
    updateField();

    //Выводим фигуру на экран
    showTetramino();

    //Назначаем цвет обводки для (strokeRect)
    //context.strokeStyle = "white";
    context.strokeStyle = "rgba(255,255,255,0.4)";

    //Назначаем цвет фигур (fillReact)
    context.fillStyle = "#383838";

    //background
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 10; i++)
    {
        for (let j = 0; j < 20; j++)
        {
            showField(i, j, field, true);
        }
    }

    showMenu();
}

function start()
{
    currentTetraminoType = undefined;
    nextTetraminoType = undefined;

    gameLoop.GameOver = false;
    initializeField();
    spawnTetramino();

    gravity();
}

function checkLayer(_y)
{
    if (_y >= 0 && _y <= 19)
    {
            for (let i = 0; i < 10; i++)
            {
                if (field[i][_y].type == TileType.empty)
                {
                    return false;
                }
            }
            return true;
    }
    else return false;
}

function deleteLayer(_y)
{
    //Очищаем слой
    for (let i = 0; i < 10; i++)
    {
        field[i][_y].type = TileType.empty;
        field[i][_y].isFallingBlock = false;
    }
}

function shiftLayer(_y)
{
    for (let j = _y - 1; j > 0; j--)
    {
        for (let i = 0; i < 10; i++)
        {
            field[i][j + 1].type = field[i][j].type;
            field[i][j].type = TileType.empty;
        }
    }
}

function deleteLayers(_yLayers, _layersInARow)
{

    for (let i = 0; i < _layersInARow; i++)
    {
        deleteLayer(_yLayers[i]);
    }
    
    let shift = 0;

    //Необходимо расположить значения удаляемых слоев в порядке убывания
    for(let i=0; i < _layersInARow; i++)
    {
        for(let j = _layersInARow - 1; j > i; j--) 
        {
            if (_yLayers[j-1] < _yLayers[j]) 
            {
                let exchange = _yLayers[j-1];
                _yLayers[j-1] = _yLayers[j];
                _yLayers[j] = exchange;
            }
        }
    }

    //Опускаем слои, расположенные выше тех, которые были удалены
    for (let i = 0; i < _layersInARow; i++)
    {
        shiftLayer(_yLayers[i] + shift);
        shift++;
    }
}

function tetraminoLanded()
{
    //делаем блоки статичными и проверяем на конец игры
    for (let i = 0; i < 4; i++)
    {
        if (tetramino.figure[i].y <= 0)
        {
            drawFrame();
            gameLoop.stopGame();
            alert("Game Over");
            start();
            break;
        }

        field[tetramino.figure[i].x][tetramino.figure[i].y].isFallingBlock = false;
    }
    
    //Сколько всего слоев должно исчезнуть после проверки
    let _layersInARow = 0;
    //Какие именно это слои
    let _yLayers = [];

    //проверяем на то, заполнен ли слой из блоков, чтобы если что его убрать и добавить очки
    for (let i = 0; i < 4; i++)
    {
        if (checkLayer(tetramino.figure[i].y))
        {
            let isSameLayers = false;

            //Проверяем на повторяемость
            for (let j = 0; j < _layersInARow; j++)
            {
                if (_yLayers[j] == tetramino.figure[i].y)
                {
                    isSameLayers = true;
                    break;
                }
            }

            //Если слой "новый", то добавляем его в массив
            if (isSameLayers == false)
            {
                _yLayers[_layersInARow] = tetramino.figure[i].y;
                _layersInARow++;
            }
        }
    }

    if (_layersInARow != 0)
    {
        deleteLayers(_yLayers, _layersInARow);
    }

    switch (_layersInARow) {
        case 1:
            gameScore += 100;
            break;
        case 2:
            gameScore += 300;
            break;
        case 3:
            gameScore += 700;
            break;
        case 4:
            gameScore += 1500;
            break;
        default:
            break;
    }

    spawnTetramino();
}

function gravity()
{
    gameLoop.loopTimeout = setTimeout(gravity, 1000);
    if (gameLoop.GameOver)
        return;

    if (isCollision(0))
    {
        for (let i = 0; i < 4; i++)
        {
            tetramino.figure[i].y++;
        }
    }
    else
    {
        tetraminoLanded();
    }
    drawFrame();
}

function rotateFallingBlock()
{
    tetramino.rotation++;
    placeTetramino(tetramino.figure[0].x, tetramino.figure[0].y, tetramino);

    let _isRotationAvailable = true;

    for (let i = 0; i < 4; i++)
    {
        if (tetramino.figure[i].x < 0 || tetramino.figure[i].x > 9 || tetramino.figure[i].y < 0 || tetramino.figure[i].y > 19)
        {
            _isRotationAvailable = false;
            break;
        }
        else if (field[tetramino.figure[i].x][tetramino.figure[i].y].type != TileType.empty && field[tetramino.figure[i].x][tetramino.figure[i].y].isFallingBlock == false)
        {
            _isRotationAvailable = false;
            break;
        }
    }

    if (_isRotationAvailable)
    {
        drawFrame();
    }
    else
    {
        tetramino.rotation--;
        placeTetramino(tetramino.figure[0].x, tetramino.figure[0].y, tetramino);

        drawFrame();
    }
}

function moveFallingBlock(_direction)
{
    if (isCollision(_direction))
    {
        switch (_direction) {
            case -1:
                for (let i = 0; i < 4; i++)
                {
                    tetramino.figure[i].x--;
                }
                break;
            case 1:
                for (let i = 0; i < 4; i++)
                {
                    tetramino.figure[i].x++;
                }
                break;
            default:
                for (let i = 0; i < 4; i++)
                {
                    tetramino.figure[i].y++;
                }
                break;
        }

        drawFrame();
    }
    else if (_direction == 0)
    {
        tetraminoLanded();
    }
}

/**
 * 
 * @param {KeyboardEvent} e 
 */
function getKeyDown(e){
    switch (e.code) {
        case 'KeyW':
            rotateFallingBlock();
            break;
        case 'KeyA':
            moveFallingBlock(-1);
            break;
        case 'KeyS':
            moveFallingBlock(0);
            break;
        case 'KeyD':
            moveFallingBlock(1);
            break;
        case 'ArrowUp':
            rotateFallingBlock();
            break;
        case 'ArrowLeft':
            moveFallingBlock(-1);
            break;
        case 'ArrowDown':
            moveFallingBlock(0);
            break;
        case 'ArrowRight':
            moveFallingBlock(1);
            break;
        default:
            break;
    }
}

background.src = "Sprites/background.png";

background.addEventListener("load", start);
document.addEventListener("keydown", getKeyDown);