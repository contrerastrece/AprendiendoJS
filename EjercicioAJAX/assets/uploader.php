<?php
    var_dump($_FILES);
    if(isset($_FILES["files"])){

        $nombre_temporal=$_FILES["files"]["tmp_name"];
        $nombre=$_FILES["files"]["name"];
        // guardar el archivo en upload
        $upload=move_uploaded_file($nombre_temporal,"upload/$nombre");
    
        if($upload){
            $res=array(
                "err"=>false,
                "status"=>http_response_code(200),
                "statusText"=>"Archivo $nombre subido con Exito",
                "files"=>$_FILES["files"]
            );
        }else{
            $res=array(
                "err"=>true,
                "status"=>http_response_code(400),
                "statusText"=>"Error al subir el archivo $nombre",
                "files"=>$_FILES["files"]
            );
        }
    
        echo json_encode($res);
    }else{
        echo " No se cargó ningún Archivo";
    }