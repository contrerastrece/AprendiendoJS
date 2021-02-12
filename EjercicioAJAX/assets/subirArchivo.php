<?php
// var_dump($_FILES["files"]);

// se ejecutará solo si está tiene un archivo
if(isset($_FILES["files"])){

    $nombre_temporal=$_FILES["files"]["tmp_name"];
    $nombre=$_FILES["files"]["name"];
    $error=$_FILES["files"]["error"];

    // guardar el archivo en la carpeta upload
    $upload=move_uploaded_file($nombre_temporal,"upload/$nombre");

    if($upload){
        $res=array(
            "err"=>false,
            "status"=>http_response_code(200),
            "statusText"=>"Archivo $nombre se ha subido con Exito 😎!!",
            "files"=>$_FILES["files"]
        );
    }else{
        $res=array(
            "err"=>true,
            "status"=>http_response_code(400),
            "statusText"=>"Error al subir el archivo $nombre 🤔",
            "files"=>$_FILES["files"]
        );
    }
    // Enviar la respuesta en formato JSON para que lo pueda leer nuestro js
    echo json_encode($res);
}else{
    echo " No se cargó ningún Archivo 😥";
}

