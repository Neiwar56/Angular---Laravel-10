@extends('products.layouts')

@section('content')

<div class="row justify-content-center mt-3">
    <div class="col-md-12">

        @if ($message = Session::get('success'))
            <div class="alert alert-success" role="alert">
                {{ $message }}
            </div>
        @endif

        <div class="card">
            <div class="card-header">Liste des Produits</div>
            <div class="card-body">
                <a href="{{ route('products.create') }}" class="btn btn-success btn-sm my-2"><i class="bi bi-plus-circle"></i> Ajouter un nouveau produit</a>
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">N°</th>
                            <th scope="col">Code</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Quantité</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($products as $product)
                        <tr>
                            <th scope="row">{{ $loop->iteration }}</th>
                            <td>{{ $product->code }}</td>
                            <td>{{ $product->name }}</td>
                            <td>{{ $product->quantity }}</td>
                            <td>{{ $product->price }}</td>
                            <td>
                                <form action="{{ route('products.destroy', $product->id) }}" method="post">
                                    @csrf
                                    @method('DELETE')

                                    <a href="{{ route('products.show', $product->id) }}" class="btn btn-warning btn-sm"><i class="bi bi-eye"></i> Voir</a>

                                    <a href="{{ route('products.edit', $product->id) }}" class="btn btn-primary btn-sm"><i class="bi bi-pencil-square"></i> Modifier</a>

                                    <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Etes vous sur de vouloir supprimer ce produit ?');"><i class="bi bi-trash"></i> Supprimer</button>
                                </form>
                            </td>
                        </tr>
                        @empty
                             <td colspan="6">
                                <span class="text-danger">
                                    <strong> Aucun produit trouvé </strong>
                                </span>
                             </td>
                            @endforelse
                    </tbody>
                </table>

                {{ $products->links() }}
            </div>
        </div>
    </div>
</div>

@endsection

