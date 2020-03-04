# Listagem-Post-Wordpress-React-Native-Expo-Api-Rest
Listagem simples de uma lista de posts Wordpress no React Native usando Api Rest,
listando apenas título e descrição do post.

# Criando um post type simples e liberando acesso para usar API REST e ter acesso aos dados no formato de Json
- Insida o código a baixo dentro do arquivo functions do seu tema Wordpress!
`
add_action( 'init', 'my_book_cpt' );
function my_book_cpt() {
    $labels = array(
        'name'               => _x( 'Books', 'post type general name' ),
        'singular_name'      => _x( 'Book', 'post type singular name' ),
        'menu_name'          => _x( 'Books', 'admin menu' ),
        'name_admin_bar'     => _x( 'Book', 'add new on admin bar' ),
        'add_new'            => _x( 'Add New', 'book' ),
        'add_new_item'       => __( 'Add New Book' ),
        'new_item'           => __( 'New Book' ),
        'edit_item'          => __( 'Edit Book' ),
        'view_item'          => __( 'View Book' ),
        'all_items'          => __( 'All Books' ),
        'search_items'       => __( 'Search Books' ),
        'parent_item_colon'  => __( 'Parent Books:' ),
        'not_found'          => __( 'No books found.' ),
        'not_found_in_trash' => __( 'No books found in Trash.' )
    );
    
    $args = array(
        'labels'             	=> $labels,
        'description'        	=> __( 'Description.' ),
        'public'             	=> true,
        'show_in_rest'       	=> true,
        'rest_base'          	=> 'books',
        'rest_controller_class' => 'WP_REST_Posts_Controller',
        'supports'           	=> array( 'title', 'editor', 'thumbnail' )
    );
    
    register_post_type( 'book', $args );
}
`

# Caso queira use apenas o código abaixo no seu post type
`'rest_base'          	=> 'books',`
`'rest_controller_class' => 'WP_REST_Posts_Controller',`
`'supports'           	=> array( 'title', 'editor', 'thumbnail' )`

# Para testar se está funcionando acesse a url do seu site
- http://meusite.com.br/wp-json/wp/v2/{nome do post criado}

# Configurações no React Native (Expo)
- Altere a URL para a sua Url desejada = http://teste.com.br.test/wp-json/wp/v2/posts

# Execute o projeto React Native
- yarn install
- expo start
