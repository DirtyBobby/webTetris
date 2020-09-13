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

let tetramino;

function placeTetramino(_x, _y)
{
    let rotation = tetramino.rotation;
    switch (tetramino.figureType) {
        case TileType.empty:
            alert("Error, empty block!")
            break;
        case TileType.blockI:
            if (rotation % 2 == 0)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x + 1,
                    y : _y,
                }
                tetramino.figure[2] = {
                    x : _x + 2,
                    y : _y,
                }
                tetramino.figure[3] = {
                    x : _x - 1,
                    y : _y,
                }
            }
            else if (rotation % 2 == 1)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x,
                    y : _y + 1,
                }
                tetramino.figure[2] = {
                    x : _x,
                    y : _y + 2,
                }
                tetramino.figure[3] = {
                    x : _x,
                    y : _y - 1,
                }
            }
            break;
        case TileType.blockJ:
            if (rotation % 4 == 0)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x,
                    y : _y + 1,
                }
                tetramino.figure[2] = {
                    x : _x,
                    y : _y - 1,
                }
                tetramino.figure[3] = {
                    x : _x + 1,
                    y : _y - 1,
                }
            }
            else if (rotation % 4 == 1)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x - 1,
                    y : _y,
                }
                tetramino.figure[2] = {
                    x : _x + 1,
                    y : _y,
                }
                tetramino.figure[3] = {
                    x : _x + 1,
                    y : _y + 1,
                }
            }
            else if (rotation % 4 == 2)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x,
                    y : _y - 1,
                }
                tetramino.figure[2] = {
                    x : _x,
                    y : _y + 1,
                }
                tetramino.figure[3] = {
                    x : _x - 1,
                    y : _y + 1,
                }
            }
            else if (rotation % 4 == 3)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x + 1,
                    y : _y,
                }
                tetramino.figure[2] = {
                    x : _x - 1,
                    y : _y,
                }
                tetramino.figure[3] = {
                    x : _x - 1,
                    y : _y - 1,
                }
            }
            break;
        case TileType.blockL:
            if (rotation % 4 == 0)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x,
                    y : _y - 1,
                }
                tetramino.figure[2] = {
                    x : _x,
                    y : _y + 1,
                }
                tetramino.figure[3] = {
                    x : _x + 1,
                    y : _y + 1,
                }
            }
            else if (rotation % 4 == 1)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x + 1,
                    y : _y,
                }
                tetramino.figure[2] = {
                    x : _x - 1,
                    y : _y,
                }
                tetramino.figure[3] = {
                    x : _x - 1,
                    y : _y - 1,
                }
            }
            else if (rotation % 4 == 2)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x - 1,
                    y : _y,
                }
                tetramino.figure[2] = {
                    x : _x + 1,
                    y : _y,
                }
                tetramino.figure[3] = {
                    x : _x + 1,
                    y : _y - 1,
                }
            }
            else if (rotation % 4 == 3)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x,
                    y : _y + 1,
                }
                tetramino.figure[2] = {
                    x : _x,
                    y : _y - 1,
                }
                tetramino.figure[3] = {
                    x : _x - 1,
                    y : _y - 1,
                }
            }
            break;
        case TileType.blockO:
            tetramino.figure[0] = {
                x : _x,
                y : _y,
            }
            tetramino.figure[1] = {
                x : _x + 1,
                y : _y,
            }
            tetramino.figure[2] = {
                x : _x,
                y : _y + 1,
            }
            tetramino.figure[3] = {
                x : _x + 1,
                y : _y + 1,
            }
            break;
        case TileType.blockS:
            if (rotation % 2 == 0)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x + 1,
                    y : _y,
                }
                tetramino.figure[2] = {
                    x : _x,
                    y : _y - 1,
                }
                tetramino.figure[3] = {
                    x : _x - 1,
                    y : _y - 1,
                }
            }
            else if (rotation % 2 == 1)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x,
                    y : _y - 1,
                }
                tetramino.figure[2] = {
                    x : _x + 1,
                    y : _y,
                }
                tetramino.figure[3] = {
                    x : _x + 1,
                    y : _y + 1,
                }
            }
            break;
        case TileType.blockT:
            if (rotation % 4 == 0)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x - 1,
                    y : _y,
                }
                tetramino.figure[2] = {
                    x : _x + 1,
                    y : _y,
                }
                tetramino.figure[3] = {
                    x : _x,
                    y : _y - 1,
                }
            }
            else if (rotation % 4 == 1)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x,
                    y : _y - 1,
                }
                tetramino.figure[2] = {
                    x : _x,
                    y : _y + 1,
                }
                tetramino.figure[3] = {
                    x : _x + 1,
                    y : _y,
                }
            }
            else if (rotation % 4 == 2)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x + 1,
                    y : _y,
                }
                tetramino.figure[2] = {
                    x : _x - 1,
                    y : _y,
                }
                tetramino.figure[3] = {
                    x : _x,
                    y : _y + 1,
                }
            }
            else if (rotation % 4 == 3)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x,
                    y : _y + 1,
                }
                tetramino.figure[2] = {
                    x : _x,
                    y : _y - 1,
                }
                tetramino.figure[3] = {
                    x : _x - 1,
                    y : _y,
                }
            }
            break;
        default: // blockZ
            if (rotation % 2 == 0)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x - 1,
                    y : _y,
                }
                tetramino.figure[2] = {
                    x : _x,
                    y : _y + 1,
                }
                tetramino.figure[3] = {
                    x : _x + 1,
                    y : _y + 1,
                }
            }
            else if (rotation % 2 == 1)
            {
                tetramino.figure[0] = {
                    x : _x,
                    y : _y,
                }
                tetramino.figure[1] = {
                    x : _x,
                    y : _y + 1,
                }
                tetramino.figure[2] = {
                    x : _x + 1,
                    y : _y,
                }
                tetramino.figure[3] = {
                    x : _x + 1,
                    y : _y - 1,
                }
            }
            break;
    }
}

//rotation
// blockL
// # - [3]
// # - [0]
// # - [1]
// # - [2]
//
// ####
// [3][0][1][2]

// blockJ
//
//  #    [1]   [3]         [2][3]                 
//  #    [0]   [2][0][1]   [0]       [1][0][2]             
// ## [3][2]               [1]             [3]

// blockL
//               #                  ###
// #   [1]           [3]        [3][2]    #    
// #   [0]     [1][0][2]      #    [0]    [2][0][1]    
// ##  [2][3]                 #    [1]    [3]   

// blockO
//
// [0][1]
// [2][3]
//

//blockS
//              [1]
//    [0][1]    [0][2]
// [3][2]          [3]
//                 

//block T
//
//     [3]        [1]                     [2]      
//  [1][0][2]     [0][3]   [2][0][1]   [3][0]      
//                [2]         [3]         [1]     

//block Z
//                  [3]
// [1][0]        [0][2]
//    [2][3]     [1]
//             

function spawnTetramino()
{
    //Место появления нновых тетрамин
    let x = 4
    let y = 0

    //пускай сейчас мы просто случайно выбираем тип фигуры (от 1 до 7, так как 0 это пустой блок)
    let _figureType = RandomInt(7) + 1
    let _rotation = RandomInt(4)

    tetramino  = {
        figure : [],
        figureType : _figureType,
        rotation : _rotation,
    }

    placeTetramino(x, y)
/*
//Фигура состоит из: [0] элемент - ось вращения фигуры, [1] элемент - верхняя часть фигуры [2] элемент - левая часть фигуры [3] элемент - правая часть фигуры. Нижняя часть проверяется по всем частям

    //собираем фигуру определенного типа из блоков
    switch (tetramino.figureType) {
        case TileType.empty:
            alert("Error, empty block!")
            break;
        case TileType.blockI:
            tetramino.figure[0] = {
                x : 4,
                y : 0,
            }
            tetramino.figure[1] = {
                x : 5,
                y : 0,
            }
            tetramino.figure[2] = {
                x : 6,
                y : 0,
            }
            tetramino.figure[3] = {
                x : 7,
                y : 0,
            }
            break;
        case TileType.blockJ:
            tetramino.figure[0] = {
                x : 4,
                y : 0,
            }
            tetramino.figure[1] = {
                x : 4,
                y : 1,
            }
            tetramino.figure[2] = {
                x : 5,
                y : 1,
            }
            tetramino.figure[3] = {
                x : 6,
                y : 1,
            }
            break;
        case TileType.blockL:
            tetramino.figure[0] = {
                x : 4,
                y : 1,
            }
            tetramino.figure[1] = {
                x : 5,
                y : 1,
            }
            tetramino.figure[2] = {
                x : 6,
                y : 1,
            }
            tetramino.figure[3] = {
                x : 6,
                y : 0,
            }
            break;
        case TileType.blockO:
            tetramino.figure[0] = {
                x : 5,
                y : 0,
            }
            tetramino.figure[1] = {
                x : 5,
                y : 1,
            }
            tetramino.figure[2] = {
                x : 6,
                y : 1,
            }
            tetramino.figure[3] = {
                x : 6,
                y : 0,
            }
            break;
        case TileType.blockS:
            tetramino.figure[0] = {
                x : 4,
                y : 1,
            }
            tetramino.figure[1] = {
                x : 5,
                y : 1,
            }
            tetramino.figure[2] = {
                x : 5,
                y : 0,
            }
            tetramino.figure[3] = {
                x : 6,
                y : 0,
            }
            break;
        case TileType.blockT:
            tetramino.figure[0] = {
                x : 4,
                y : 1,
            }
            tetramino.figure[1] = {
                x : 5,
                y : 1,
            }
            tetramino.figure[2] = {
                x : 5,
                y : 0,
            }
            tetramino.figure[3] = {
                x : 6,
                y : 1,
            }
            break;
        default:
            tetramino.figure[0] = {
                x : 4,
                y : 0,
            }
            tetramino.figure[1] = {
                x : 5,
                y : 0,
            }
            tetramino.figure[2] = {
                x : 5,
                y : 1,
            }
            tetramino.figure[3] = {
                x : 6,
                y : 1,
            }
            break;
    }
    */

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
            if (tetramino.figure[i].y >= 0 && (tetramino.figure[i].x <= 0 || (field[tetramino.figure[i].x - 1][tetramino.figure[i].y].type != TileType.empty && field[tetramino.figure[i].x - 1][tetramino.figure[i].y].isFallingBlock == false)))
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
            if (tetramino.figure[i].y >= 0 && (tetramino.figure[i].x >= 9 || (field[tetramino.figure[i].x + 1][tetramino.figure[i].y].type != TileType.empty && field[tetramino.figure[i].x + 1][tetramino.figure[i].y].isFallingBlock == false)))
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
            if (tetramino.figure[i].y >= 19 || (field[tetramino.figure[i].x][tetramino.figure[i].y + 1].type != TileType.empty && field[tetramino.figure[i].x][tetramino.figure[i].y + 1].isFallingBlock == false))
            {
                return false;
            }
        }
        return true;
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
    context.strokeStyle = "white";

    //Назначаем цвет фигур (fillReact)
    context.fillStyle = "#383838";

    //background
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 10; i++)
    {
        for (let j = 0; j < 20; j++)
        {
            const cell = field[i][j];
            switch (cell.type) {
                case TileType.empty:
                    context.strokeRect(field[i][j].x, field[i][j].y, 40, 40);
                    break;
                case TileType.blockI:
                    context.fillStyle = "cyan";
                    context.fillRect(field[i][j].x, field[i][j].y, 40, 40);
                    break;
                case TileType.blockJ:
                    context.fillStyle = "blue";
                    context.fillRect(field[i][j].x, field[i][j].y, 40, 40);
                    break;
                case TileType.blockL:
                    context.fillStyle = "orange";
                    context.fillRect(field[i][j].x, field[i][j].y, 40, 40);
                    break;
                case TileType.blockO:
                    context.fillStyle = "yellow";
                    context.fillRect(field[i][j].x, field[i][j].y, 40, 40);
                    break;
                case TileType.blockS:
                    context.fillStyle = "green";
                    context.fillRect(field[i][j].x, field[i][j].y, 40, 40);
                    break;
                case TileType.blockT:
                    context.fillStyle = "purple";
                    context.fillRect(field[i][j].x, field[i][j].y, 40, 40);
                    break;
                default:
                    context.fillStyle = "red";
                    context.fillRect(field[i][j].x, field[i][j].y, 40, 40);
                    break;
            }
        }
    }
}

function update()
{
    //drawFrame();
    //Перемещение фигуры, просчет столкновений
    //gameComputings();

    //setTimeout(update, 1000);
}

function start()
{
    initializeField();
    spawnTetramino();

    gravity();
}

function checkLayer(_y)
{
    let _isFilled = false;

    for (let i = 0; i < 20; i++)
    {
        if (field[i][_y].type == empty)
        {
            return false;
        }
    }
    return true;
}

function deleteLayer(_y)
{
    //Очищаем слой
    for (let i = 0; i < 20; i++)
    {
        field[i][_y].type = empty;
        field[i][_y].isFallingBlock = false;
    }

    //если есть элементы выше, то опускаем их вниз
    for (let j = _y - 1; j  > 0; j--)
    {
        for (let i = 0; i < 10; i++)
        {
            field[i][j + 1].type = field[i][j].type;
            field[i][j].type = empty;
        }
    }
}

function tetraminoLanded()
{
    //проверяем на то, заполнен ли слой из блоков, чтобы если что его убрать и добавить очки
    for (let i = 0; i < 4; i++)
    {
        field[tetramino.figure[i].x][tetramino.figure[i].y].isFallingBlock = false;
        /* BUG
        if (checkLayer(tetramino.figure[i].y))
        {
            deleteLayer(tetramino.figure[i].y)
        }
        */
    }
    spawnTetramino();
}

function gravity()
{
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

    setTimeout(gravity, 1000);
}

function rotateFallingBlock()
{
    //LEGACY
    tetramino.rotation++;
    placeTetramino(tetramino.figure[0].x, tetramino.figure[0].y);
    
    drawFrame();

    //без drawFrame(); новое
    /*
    let _isRotationAvailable = true;

    for (let i = 0; i < 4; i++)
    {
        if (tetramino.figure[i].x < 0 || tetramino.figure[i].y < 0 || field[tetramino.figure[i].x][tetramino.figure[i].y].type != empty)
        {
            _isRotationAvailable = false;
        }
        break;
    }

    if (_isRotationAvailable)
    {
        drawFrame();
    }
    else
    {
        tetramino.rotation--;
        placeTetramino(tetramino.figure[0].x, tetramino.figure[0].y);

        drawFrame();
    }
    */
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
    //else if (_direction == 0)
    //{
    //    tetraminoLanded();
    //}
}

/**
 * 
 * @param {KeyboardEvent} e 
 */
function getKey(e){
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
//background.addEventListener("load", awake);
document.addEventListener("keydown", getKey);

//Пусть после прогрузки заднего фона нарисуется кадр
